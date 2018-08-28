import React from 'react';

const GameLoseModal = (props) =>{
    return (
        <div>
        <Button onClick={() => {
          $('#foo').modal('open')
        }}>Show Modal</Button>
        <Modal
          id='foo'
          header='Modal Header'>
          Lorem ipsum dolor sit amet
        </Modal>
      </div>
    );
}

export default GameLoseModal;