import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';

import publicRouteList from '../../routes/PublicRoutelist';



const FrontendLayout = () => {
    return (
        <div>
            
            <Navbar />

            {/* <!--main area--> */}
            <div>
                <Switch>
                    { publicRouteList.map((routedata, idx) => {
                        return (
                            routedata.component && (
                                <Route 
                                    key={idx}
                                    path={routedata.path}
                                    exact={routedata.exact}
                                    name={routedata.name}
                                    render={(props) =>(
                                        <routedata.component {...props} />
                                    )}
                                />
                            )
                        )
                     })}
                    
                </Switch>
            </div>
 
           
        </div>
    )
}

export default FrontendLayout;