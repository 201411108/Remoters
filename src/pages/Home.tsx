/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import './Home.css'
import Header from 'components/Header'
import Card from 'components/Card'
import CardHeader from 'components/CardHeader'

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
        try {
            const res = await fetch('https://9ka6d9cy9f.execute-api.ap-northeast-2.amazonaws.com/default/getYourcodeInterviewData')
                              .then(response => response.json())
            setTodayJobs(res.todayJobs)
            setWeeklyJobs(res.weeklyJobs)
            setIsLodaing(false)
            
        } catch (error) {
            // error handling
        }
    }

    return (
        <>
        { !isLoading ? (
            <>
                <div className='logoContainer'>
                    <Header />
                </div>
                <div className='cardsContainer'>
                    <div className='columnContainer'>
                        <CardHeader title='오늘 들어온 잡'/>
                    </div>
                    {/* <ColumnContainer>
                        <CardHeader title='오늘 들어온 잡' />
                        { todayJobs.map((job) => (
                                <Card key={job.name} contents={ job.contents } name={job.name} date={job.date} position={job.position} tags={job.tags}/>
                            ))
                        }
                        <CardHeader title='이번주 들어온 잡' />
                        { weeklyJobs.map((job) => (
                                <Card key={job.name} contents={ job.contents } name={job.name} date={job.date} position={job.position} tags={job.tags}/>
                            ))
                        }
                    </ColumnContainer> */}
                </div>
                <img className='topButton'
                     src='/assets/group-8.webp'
                     alt='topButton'
                     onClick={() => {
                         window.scrollTo({
                             top: 0,
                             left: 0,
                             behavior: 'smooth'
                         })
                     }}/>
            </>
        ) : (
            <>Loading...</>
        )}
        </>
    )
}

export default Home