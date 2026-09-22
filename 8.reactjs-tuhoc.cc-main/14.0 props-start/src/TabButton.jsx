export default function TabButton({children}) {
    //js
    // const btn = document.querySelector("button");
    // btn.addEventListener("click", ()=>{//tham số 1 là lắng nghe sk, tham số 2 là thực hiện hàm
    //     //làm việc gì đó
    // }) 

    function handleClick() {
        alert("Nút bấm được click");
    }

    return (
        <li>
            <button onClick={handleClick}>
                {children}
            </button>
        </li>
        // ko thêm dấu ngoặc tròn vì thêm nó thì hàm thực thi ngay lập tức
    )
}

// export default function TabButton({aaa}) {
//     return (
//         <li>
//             <button>
//                 {aaa}
//             </button>
//         </li>
//     )
// }