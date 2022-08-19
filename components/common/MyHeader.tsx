import styled from '@emotion/styled';

export default function MyHeader() {
    const TopBar = styled.div`
        display: flex;
        height: 10vh;
        background-color: #B4BEDF;
        justify-content: center;
        align-items: center;
        
            h2 {
                font-size: 36px;
            }`;

    return (
        <TopBar>
            <h2>TODO</h2>
        </TopBar>
    );
}