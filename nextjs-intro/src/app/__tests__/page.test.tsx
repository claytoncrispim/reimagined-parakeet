// import { render, screen } from '@testing-library/react';
// import HomePage from '../page'; // Import the Home component we want to test
// import { it } from 'node:test';
// import { experimental_useEffectEvent } from 'react';

// // 'describe' groups related tests together
// describe('HomePage', () => {
//     // 'it' defines an individual test case
//     it('should render the main heading', () => {
//         // 1. Arrange: Render the HomePage component
//         render(<HomePage />)

//         // 2. Act: Find the heading element we are interested in.
//         // 'screen.getByRole' is a user-centric way to find/query elements.
//         const heading = screen.getByRole('heading', {
//             name: /Next.js Intro/i, // The 'i' makes the text match case-insensitive)
//     })

//         // 3. Assert: Check if the heading element is in the document
//         expect(heading).toBeInTheDocument();
//     })
// })

/**
 * The code above is commented out to prevent test failures due to missing child components.
 * What happens is: the test is trying to render the real UserList component, which is an async 
 * component that makes a live API call.
 * 
 * Unit tests should be isolated and fast—they should never make real network requests. 
 * The test environment (JSDOM) doesn't know how to run this async server component, which causes 
 * the entire render to fail before your heading even appears.
 * 
 * The Solution: Mocking
 * The solution is to "mock" the child components. This means we tell Jest to replace 
 * the real UserList and Counter components with simple, fake placeholder components just for this test. 
 * This allows us to test HomePage in complete isolation.
 * 
 * */

import { render, screen } from '@testing-library/react';
import HomePage from '../page'; // Import the Home component we want to test

// 1. Mock the child components
// This tells Jest to replace the real UserList with a fake version
jest.mock('@/components/UserList', () => {
    // The fake component is a simple function that returns a placeholder div
    return function MockedUserList() {
        return <div>Mocked UserList</div>
    }
})

// We'll also mock the Counter component to keep the test isolated
jest.mock('@/components/Counter', () => {
    return function MockedCounter() {
        return <div>Mocked Counter</div>
    }
})

describe('HomePage', () => {
    it('should render the main heading', () => {
        render(<HomePage />)

        const heading = screen.getByRole('heading', {
            name: /Next.js Intro/i,
        })

        expect(heading).toBeInTheDocument()
    })
})