import React, { useState, useEffect } from 'react'
import LogoContainer from 'components/LogoContainer'
import Header from 'components/Header'
import Card from 'components/Card'
import CardHeader from 'components/CardHeader'
import CardsContainer from 'components/CardsContainer'
import { ColumnContainer } from 'components/style'

interface dataType {
    contents: string;
    name?: string;
    date: string;
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
                <CardsContainer>
                    <ColumnContainer>
                        {/* today */}
                        <CardHeader title='오늘 들어온 잡' />
                        { todayJobs.map((job) => (
                                <Card key={job.name} contents={ job.contents } name={job.name} date={job.date} position={job.position} tags={job.tags}/>
                            ))
                        }
                        {/* weekly */}
                        <CardHeader title='이번주 들어온 잡' />
                        { weeklyJobs.map((job) => (
                                <Card key={job.name} contents={ job.contents } name={job.name} date={job.date} position={job.position} tags={job.tags}/>
                            ))
                        }
                    </ColumnContainer>
                </CardsContainer>
            </>
        ) : (
            <>Loading...</>
        )}
        </>
    )
}

export default Home