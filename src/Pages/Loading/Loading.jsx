import React from 'react';
import loadingImg from '../../images/logo/cupertino_activity_indicator.gif';

const Loading = () => {
  return (
    <>
      <div className="h-[100vh] flex items-center justify-center">
        <img className="bg-white h-20" src={loadingImg} alt="" />
      </div>
    </>
  );
};

export default Loading;
