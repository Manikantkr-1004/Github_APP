import React, { useContext, useState } from 'react'
import {Box, Button, Flex, Image, Input, Text} from "@chakra-ui/react"
import {DataProvide} from "../DataContext/DataProvider"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export function Dashboard() {
    
    const {data,setData} = useContext(DataProvide);
    const [username,setUserName] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();

    const handleGetRepo = ()=>{
        if(username===""){
            alert("Please Enter Your UserName");
            return;
        }
        setLoading(true);

        axios.get(`https://api.github.com/users/${username}/repos`)
        .then((res)=>{
            setLoading(false);
            setData(res.data);

        }).catch((err)=>{
            setLoading(false);
            alert("This Username is wrong, Please correct it!!")
        })
    }

    function handleGo(){
        if(username!==""){
            navigate(`/followers/${username}`);
        }else{
            alert("Please Enter UserName")
        }
    }

    return (
        <Box>
            <Flex w="90%" justifyContent="space-between" m="auto" mt="20px" mb="30px">
                <Input value={username} onChange={(e)=> setUserName(e.target.value)} w="70%" border="2px solid black" borderRadius="5px 0px 0px 5px" type='text' placeholder='Enter Your GitHub UserName' />
                {loading? <Button bg="black" _hover={{bg:"black"}} borderRadius="0px 5px 5px 0px" color="white" w="30%" isLoading></Button> : 
                <Button onClick={handleGetRepo} variant="unstyled" bg="black" borderRadius="0px 5px 5px 0px" color="white" w="30%">Submit</Button>}
            </Flex>

            <Flex w="90%" justifyContent="space-between" gap="10px" m="auto" mb="10px">
                <Button  variant="unstyled" w="48%" bg="#000000" color="white" fontWeight="bold">Total Repositories:- {data.length}</Button>
                <Button onClick={handleGo} variant="unstyled" w="48%" bg="#253bff" color="white" fontWeight="bold">Show All Followers</Button>
            </Flex>

            <Box>
                {
                    data?.map((ele)=>(
                        <Box onClick={()=> navigate(`/repo/${ele.id}`)} key={ele.id} w="90%" m="auto" mb="10px" p="10px" bg="#d4d4d4"
                         color="black" cursor="pointer" borderRadius="5px" fontWeight="bold">
                            <Flex w="100%" justifyContent="space-between" gap="5px" alignItems="center">
                                <Text>Username:- {ele.owner.login}</Text>
                                <Text>Repo:- {ele.name}</Text>
                                <Image borderRadius="50%" w="50px" src={ele.owner.avatar_url} alt={ele.owner.login} />
                            </Flex>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}
