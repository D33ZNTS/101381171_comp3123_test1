//Delayed Success
const delayedSucces = () =>{
    setTimeout(() => {
        let success = {'message' : 'delayed success!'}
        console.log(success)
    }, 500)
}
//Delayed Exception
const delayedException = () => {
    setTimeout(() => {
        try{
            throw new Error ('error: delayed exception!')
        } catch(e){
            console.error(e)
        }
    }, 500)
}
//Resolved Promise
const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let success = { 'message': 'delayed success!' };
        resolve(success);
      }, 500);
    });
  };
  //RejectedPromise
  const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          throw new Error('error: delayed exception!');
        } catch (e) {
          reject(e);
        }
      }, 500);
    });
  };
  
  // Call and handle the resolved promise
  resolvedPromise()
    .then(result => {
      console.log('Resolved Promise Result:', result);
    })
    .catch(error => {
      console.error('Resolved Promise Error:', error);
    });
  
  // Call and handle the rejected promise
  rejectedPromise()
    .then(result => {
      console.log('Rejected Promise Result:', result);
    })
    .catch(error => {
      console.error('Rejected Promise Error:', error);
    });
  