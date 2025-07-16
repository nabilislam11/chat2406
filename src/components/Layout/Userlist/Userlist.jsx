import React, { useEffect, useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsFillPlusSquareFill } from "react-icons/bs";
import user1 from "../../../assets/user1.jpg"
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { useSelector } from 'react-redux';
import { FaMinusCircle } from "react-icons/fa";
const Userlist = () => {
    const db = getDatabase();
    const userdata = useSelector(state => state.userinfo.value)

    const [userlist, setUserlist] = useState([])

    useEffect(() => {
        const userRef = ref(db, 'users/');
        onValue(userRef, (snapshot) => {
            let arr = []
            snapshot.forEach((item) => {
                console.log(item.key, "value");

                if (userdata.user.uid !== item.key) {

                    arr.push({ ...item.val(), userid: item.key });

                }


                
                
                
            })
            setUserlist(arr)
        });
    }, [])
    const [friendrequestlist,setFriendrequestlist] =useState([])
      useEffect(() => {
              const friendrequestRef = ref(db, 'friendrequest/');
              onValue(friendrequestRef, (snapshot) => {
                  let arr = []
                  snapshot.forEach((item) => {

                   arr.push(item.val().receiverid +item.val().senderid);
                    
                  })
                 setFriendrequestlist(arr)
        
                 
              });
          }, [])
          console.log(friendrequestlist);
          

          
          
    
    const handleRequest = (item) => {

        set(push(ref(db, 'friendrequest/')), {
            senderid:userdata.user.uid,
            sendername:userdata.user.displayName,
            receiverid:item.userid,
            receivername:item.username,
       });
    }

    
    return (
        <div className='xl:w-[28%] w-full   h-[50%] rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-secondary px-[28px] py-[20px] ' >
            <div className="flex justify-between">
                <h2 className='font-semibold font-secondary text-[20px]  text-black'>User List</h2>
                <BsThreeDotsVertical className=' font-semibold text-[20px] text-black ' />

            </div>
            <div className="overflow-y-scroll h-[90%] ">
                {
                    userlist.map((item) => (
                        <div className="flex items-center justify-between pt-[13px] border-b-2 border-gray-300 ">
                            <div className="flex gap-x-[10px]  justify-start items-center">
                                <div className="w-[70px] h-[70px] rounded-full bg-center bg-cover bg-no-repeat  " style={{ backgroundImage: `url(${item.img})` }}>  </div>

                                <div className="">
                                    <h2 className='font-semibold font-secondary text-[14px]  text-black ' >
                                        {item.username}
                                    </h2>
                                    <p className='font-medium  font-secondary text-[10px]  text-black/50 '>
                                        {item.email}
                                    </p>
                                </div>

                            </div>
                            {
                                friendrequestlist.includes(userdata.user.uid+item.userid) ||
                                friendrequestlist.includes(item.userid+userdata.user.uid) ?
                                 <button className='pr-[20px] '> <FaMinusCircle size={25} /></button>
                                 :
                            <button onClick={() => handleRequest(item)} className='pr-[20px] '> <BsFillPlusSquareFill size={25} /></button>
                            }
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Userlist