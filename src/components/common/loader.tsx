import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <span>&lt;</span>
        <span>LOADING</span>
        <span>/&gt;</span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;

  .loader {
    font-size: 2.5em;
    font-weight: 900;
    font-family: 'Inter', sans-serif;
  }
  .loader > * {
    color: #4a3aff;
  }
  .loader span {
    display: inline-flex;
  }
  .loader span:nth-child(2) {
    letter-spacing: -1em;
    overflow: hidden;
    animation: reveal 1200ms cubic-bezier(0.645, 0.045, 0.355, 1) infinite alternate;
  }
  @keyframes reveal {
    0%, 100% {
      opacity: 0.5;
      letter-spacing: -1em;
    }
    50% {
      opacity: 1;
      letter-spacing: 0.1em;
    }
  }
`;

export default Loader;