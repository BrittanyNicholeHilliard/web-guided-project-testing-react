import {fireEvent, render, wait, screen} from '@testing-library/react';
import React from 'react';
import App from './App';

import mockFetchMissions from './api/fetchMissions'
jest.mock('./api/fetchMissions')

test('renders without errors', () => {
    render(<App/>)
})

test('fetches and renders mission data', async () => {
    render(<App/>);
    mockFetchMissions.mockResolvedValueOnce({
        data: [{mission_name: "mission 1", mission_id: "mission 1"},
        {mission_name: "mission 2", mission_id: "mission 2"},
        {mission_name: "mission 3", mission_id: "mission 3"}]
    });

    const button = screen.getByRole('button');

    fireEvent.click(button);

    await wait();

    expect(screen.getAllByTestId('mission')).toHaveLength(3);
})


