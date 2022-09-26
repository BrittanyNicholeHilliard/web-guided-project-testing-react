import {render, screen} from '@testing-library/react';
import MissionsList from './MissionsList'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'

const missions = [
    {
    mission_name: "thaicon", 
    mission_id: "849238420"}
]



test('mission list shows data when re-render with new mission data', () => {
    const {rerender} = render(<MissionsList errors="" missions={[]}/>)
   let missionsObjects = screen.queryAllByTestId('mission');
 expect(missionsObjects).toHaveLength(0)

    rerender(<MissionsList errors="" missions={missions} />)
    missionsObjects = screen.queryAllByTestId('mission')
    expect(missionsObjects).toHaveLength(1)
})

