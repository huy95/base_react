// 1. update DOM
// 2. call api
// 3. listen DOM events - scroll - resize
// 4. cleanup :
//     - remove listener/ unsubcribe
// - clear timer

//cac truong hop :
//1. useEffect(callback) => it dung vì mỗi lần re-render là sẽ render lại
//2. useEffect(callback, [])  => chỉ gọi callback 1 lần khi component mount
//3. useEffect(callback, [deps])

import {useEffect, useState} from "react";
const tabs = ['posts', 'comments', 'albums']
function UseEffectHook() {
    const [isShowContent, setContent] = useState(false);
    const [post, setPosts] = useState([]);

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(
    //         item => {
    //             // setPosts(item)
    //         }
    //     )
    // }, [])

    return (
        <div>
            <button onClick={() => setContent(!isShowContent)}>Togger</button>
            {isShowContent && <Content />}
            {/*<ul>*/}
            {/*    {post.map((item) => (<li>*/}
            {/*        {item.title}*/}
            {/*    </li>))}*/}
            {/*</ul>*/}
        </div>
    )
}

export default UseEffectHook


function Content() {
    const [title, setTitle] = useState("");
    const [post, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    useEffect(() => {
        document.title = title;
    })
    console.log(type)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type).then(res => res.json()).then(
            item => {
                setPosts(item)
            }
        )
    }, [type])
    return (<div>
        <input value={title}
        onChange={e => setTitle(e.target.value)}
        />
        {
            tabs.map(item => (
                <button key={item}
                        onClick={() => setType(item)}
                        style={item === type ? {color: '#fff' ,backgroundColor: '#333'} : {}}>
                    {item}
                </button>
            ))
        }
        <ul>
            {post.map((item) => (<li>
                {item.title || item.name}
            </li>))}
        </ul>
    </div>)
}