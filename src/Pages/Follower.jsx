import { Box, Button, Image, SimpleGrid, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function Follower() {
    
    const {id} = useParams();
    const [data,setData] = useState([]);
    const naviagate= useNavigate();

    useEffect(()=>{
        axios.get(`https://api.github.com/users/${id}/followers`)
        .then((res)=>{
            setData(res.data)
        }).catch((err)=>{
            alert("Please go back and write correct username!!")
        })

    },[id])

    return (
        <>
        <Text mt="20px" fontWeight="bold" fontSize="20px" textAlign='center' color="blue">There are {data.length} persons who are following {id}</Text>
        <SimpleGrid columns="3" gap="20px" w="90%" m="auto" mt="20px" mb="20px">
            {
                data?.map((ele)=>(
                    <Box key={ele?.login} bg="#e6e6e6" p="15px" borderRadius="10px" fontWeight="bold">
                        <Image borderRadius="50%" w="100px" m="auto" src={ele?.avatar_url} alt={ele?.login} />
                        <Text textAlign="center" m="5px 0px">Username:- {ele?.login}</Text>
                        <a href={ele?.html_url} target="_blank" ><Button variant="unstyled" bg="black" color="white" w="100%">Go to Profile</Button></a>
                        <Button onClick={()=> naviagate(`/followerepo/${ele?.login}`)} variant="unstyled" bg="black" color="white" w="100%" mt="10px">Show All Repository</Button>
                    </Box>
                ))
            }
        </SimpleGrid>
        </>
    )
}
