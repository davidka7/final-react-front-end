// import React, { useContext, useState, useEffect } from "react";
import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getTopic} from '../actions/topicAction'
import Comment from './Comment'
// //const useFetch = url => {
//   //const [data, setData] = useState(null);
//   //const [loading, setLoading] = useState(true);

//   // Similar to componentDidMount and componentDidUpdate:
//  // useEffect(async () => {

//    // Authorization: localStorage.getItem("token")
//    // const response = await fetch(url);
//    // const data = await response.json();

    
//    console.log(data)
//    // console.log(data.results)
//     const [item] = data.results;
//     setData(item);
//     setLoading(false);
//   }, []);

//   return { data, loading };
// };

// export default () => {
//   const [count, setCount] = useState(0);
//   const { data, loading } = useFetch("http://localhost:3000/api/v1/saveds");

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//       {loading ? <div>...loading</div> : <div>{data.map(obj=>obj)}</div>}
//     </div>
//   );
// };
//import React, {useContext} from 'react'
//import {TopicContext} from '../App'

function Data({getTopic, topicz}) {
//const topicContext = useContext(TopicContext)
useEffect(() => {
    getTopic()
}, [])
//getter() {
//if (getTopic.data) { }
//}

 const topics= [].slice.call(topicz.topic)
return (
<div>
   hi


  { topics.map(t=><h1>{t.topic}
   <Comment x={t.user_id}/> </h1>) }

    </div>


)
}
const mapDispatchToProps = (dispatch) => {
return {
    getTopic: () => getTopic(dispatch),
}
}
export default connect(store=>({topicz:store}), mapDispatchToProps)(Data)