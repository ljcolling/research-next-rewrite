/* eslint-disable @next/next/no-img-element */
import React, { Fragment} from "react";


export const Info: React.FC = () => {
return (<Fragment>
            <div className="flex justify-center">
              <img alt="" width={24} height={24} className="w-24 py-5 rounded-full" src="./assets/profile.jpeg" />
            </div>
            <div className="flex justify-center">
              <h1 className="text-xl font-medium uppercase pt-5">Lincoln Colling, PhD</h1>
            </div>
            <div className="container mx-auto text-center">
              <h2 className="text-lg font-light pt-5">Data, Software, Neuroscience, and Philosophy</h2>
            </div>
            <div className="flex justify-center py-5">
              <div className="grid grid-cols-5 gap-5">
                <div>
                  <a href="https://github.com/ljcolling">
                    <i className="fa fa-github fa-2x">
                    </i></a></div>
                <div>
                  <a href="https://scholar.google.com/citations?user=lgZOQkUAAAAJ&hl=en">
                    <i className="ai ai-google-scholar ai-2x">
                    </i></a></div>
                <div>
                  <a href="https://orcid.org/0000-0002-3572-7758">
                    <i className="ai ai-orcid ai-2x">
                    </i></a></div>
                <div>
                  <a href="https://osf.io/v96gc/">
                    <i className="ai ai-osf ai-2x">
                    </i></a></div>
                <div>
                  <a href="https://www.linkedin.com/in/ljcolling/">
                    <i className="fa fa-linkedin fa-2x">
                    </i></a></div>
              </div>
            </div>
            <div className="flex justify-center text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-32">
                <div className="text-center">
                  <h3 className="uppercase">Current Position</h3>
                  <p>Lecturer (Assistant Professor)</p>
                  <p>School of Psychology</p>
                  <p>University of Sussex</p>
                </div>
                <div className="text-center">
                  <h3 className="uppercase">Contact</h3>
                  <p>lincoln@colling.net.nz</p>
                </div>
              </div>
            </div>
            </Fragment>
            )} 


