import React from 'react';

/*A stateless/presentational component. it renders faster and is easily testable since its a 
 pure function 
 See the props destructure ({}) here to purely define the props (isComplete, text, handleOnClick) being passed in.
 */
const Task =  ({isComplete, text, handleOnClick}) => isComplete ? <li onClick={handleOnClick}><strike>{text}</strike></li>:<li onClick={handleOnClick}>{text}</li>

export default Task;