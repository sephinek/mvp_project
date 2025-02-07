import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Title from '../../components/atoms/Title'

const Home = () => {
    const location = useLocation()
    return (
        <>
            <Title>나의 비전은 {location.state.item}</Title>
        </>
    )
}

export default Home
