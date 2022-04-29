import { styled } from "frontity";

const BoxContainer = styled.div`
    width : ${(props) => props.width ? props.width : "200px"};
    height : ${(props) => props.height ? props.height : "400px"};
    border-radius: 20px;
    margin : 20px;
    padding: 10px 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    `


const Box = ({
    children, width, height
}) => {
    return (
        <BoxContainer width={width} height={height}>
                {children}
        </BoxContainer>
        
    )
}

export default Box