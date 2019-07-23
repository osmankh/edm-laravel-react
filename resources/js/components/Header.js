import React from 'react'
import '../../sass/components/header.scss';

const Header = () => (
    <div className="head_cover">
        <div className="container pp_head cf">
            <div className="logo-head">
                <img src={`storage/logo.png`} className="img-responsive"  />
            </div>
        </div>
    </div>
);

export default Header
