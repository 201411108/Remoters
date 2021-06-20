import React, { useState, useEffect } from 'react'
import LogoContainer from 'components/LogoContainer'
import Header from 'components/Header'
import Card from 'components/Card'
import CardContainer from 'components/CardContainer'

interface dataType {
    contents?: string;
    name?: string;
    date?: string;
    logo?: string;
    position?: string;
    tags?: string[];
}

function Home() {
    const [todayJobs, setTodayJobs] = useState<dataType[]>([])
    const [weeklyJobs, setWeeklyJobs] = useState<dataType[]>([])
    const [isLoading, setIsLodaing] = useState<boolean>(true)

    useEffect(() => {
        if(todayJobs.length === 0) {
            getJobs();
        }
    })

    const getJobs = async () => {
        await fetch('https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData')
            .then(response => response.json())
            .then(response => {
                setTodayJobs(response.todayJobs)
                setWeeklyJobs(response.weeklyJobs)
                setIsLodaing(false)
            })
    }

    return (
        <>
        { !isLoading ? (
            <>
                <LogoContainer>
                    <Header />
                </LogoContainer>
                <CardContainer>
                    <Card name={todayJobs[0].name} position={todayJobs[0].position}/>
                </CardContainer>
            </>
        ) : (
            <>Loading...</>
        )}
        </>
    )
}

export default Home