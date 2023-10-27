import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { DataProvide } from '../DataContext/DataProvider';
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';

export function Repo() {
    
    const {data} = useContext(DataProvide);
    const {id} = useParams();
    const [singledata,setSingleData] = useState({});

    useEffect(()=>{
        const finding = data.find((ele)=> ele.id=== +id);
        setSingleData(finding);
        console.log(finding,+id);
    },[id])

    console.log(singledata);

    return (
        <Box w="70%" m="auto" p="15px" borderRadius="20px" bg="#e0e0e0" mt="20px" mb="20px">
            <Image w="250px" m="auto" borderRadius="50%" src={singledata?.owner?.avatar_url} alt={singledata?.name} />
            <Flex w="100%" justifyContent="space-between" gap="10px" alignItems="center" mt="10px" fontWeight="bold">
                <Text>Username:- <span style={{color:"blue"}}>{singledata?.owner?.login}</span></Text>
                <Text>Repository Name:- <span style={{color:"blue"}}>{singledata?.name}</span></Text>
                <Text>Repository Status:- <span style={{color:"blue"}}>{singledata?.visibility}</span></Text>
            </Flex>

            <Flex w="100%" justifyContent="space-between" gap="10px" alignItems="center" mt="10px" fontWeight="bold">
                <Text>Created at:- <span style={{color:"blue"}}>{singledata?.created_at}</span></Text>
                <Text>Updated at:- <span style={{color:"blue"}}>{singledata?.updated_at}</span></Text>
                <Text>Pushed at:- <span style={{color:"blue"}}>{singledata?.pushed_at}</span></Text>
            </Flex>

            <Text fontWeight="bold" mt="10px">Clone URL:- <span style={{color:"blue"}}>{singledata?.clone_url}</span></Text>

            <Flex w="100%" justifyContent="space-between" gap="10px" alignItems="center" mt="10px" fontWeight="bold">
                <Text>Default Branch:- <span style={{color:"blue"}}>{singledata?.default_branch}</span></Text>
                <Text>Forking Allowed:- <span style={{color:"blue"}}>{singledata?.allow_forking? "Yes" :"No"}</span></Text>
            </Flex>
            <a href={singledata?.html_url} target="_blank"><Button w="100%" m="10px 0px" variant="unstyled" color="white" bg="black">Go to Repository</Button></a>
        </Box>
    )
}
