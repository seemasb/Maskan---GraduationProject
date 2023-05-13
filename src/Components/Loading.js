import { useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import RoofingIcon from '@mui/icons-material/Roofing';
import styled from 'styled-components';

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 100%;
`;
function Loading() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#45729d");

    return (
        <LoadingWrapper>

            <div className="sweet-loading" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , rowGap: 40 }}>
                <div>
                    <RoofingIcon sx={{ fontSize: 110 }} color='disabled' />
                    <span className='logoTitle' style={{ color: 'lightgray' , fontSize: 100}}>Maskan</span>
                </div>
                <PropagateLoader

                    color={color}
                    loading={loading}
                    size={30}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </LoadingWrapper>
    );
}

export default Loading;