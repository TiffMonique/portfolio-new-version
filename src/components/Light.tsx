import React from 'react'
import styled from 'styled-components'

export interface ILight { 
    width: number | string,
    height: number | string
    left: number | string,
    top: number | string,
    background: string 
}
interface Props {
  light: ILight;
}

const StyledLight = styled.div`
    position: absolute;
`;
function Light(props: Props) {
    const {light} = props;
    return (
       <StyledLight
        style={{
            width: light.width,
            height: light.height,
            left: light.left,
            top: light.top,
            background: light.background,
      }}
    />
    )
}

export default Light
