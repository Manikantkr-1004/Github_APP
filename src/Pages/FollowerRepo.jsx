import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Box, Button, Flex, Image, Input, Text} from "@chakra-ui/react"
import { useParams } from 'react-router-dom'

export function FollowerRepo() {
    
    const {id} = useParams();
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${id}/repos`)
        .then((res)=>{
            setData(res.data);

        }).catch((err)=>{
            alert("This Username is wrong, Please correct it!!")
        })
    },[id])

    return (
        <Box>

            {data.length>0 && <Text m="20px 0px" fontSize="20px" textAlign="center" color="blue" fontWeight="bold">There are {data.length} repositories of {id} GitHub User.</Text>}

            <Box>
                {
                    data?.map((ele)=>(
                        <Box key={ele.id} w="90%" m="auto" mb="10px" p="10px" bg="#d4d4d4"
                         color="black" borderRadius="5px" fontWeight="bold">
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
