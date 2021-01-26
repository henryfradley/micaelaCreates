import React, { useState } from 'react';
import VisibilitySensor from  'react-visibility-sensor';


const Appear = ({ children }) => {

  const [isVisible, setVisibility] = useState(false)

  const onChange = visibility => {
    setVisibility(visibility);
  };

  return (
    <VisibilitySensor
      partialVisibility
      offset={{ top: 200 }}
      onChange={onChange}
    >
        {isVisible ? children : null}
    </VisibilitySensor>
  )
}

export default Appear;