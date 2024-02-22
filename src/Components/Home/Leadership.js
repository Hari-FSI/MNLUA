import React from "react";
import Image from "next/image";
import NewImage from "./NewImage";
import Link from "next/link";

function Leadership({ leadership }) {
  return (
    <div className="row">

 

      {" "}
      {leadership.map((item, index) => (
              <div key={item.index} className="col-md-6">
                <aside className="vcmessage-sec">
							<div className="div-table">
								<aside className="img-block">
                <NewImage src={item.field_image} />
								</aside>
								<aside className="content-cell">
									<h3>{item.title}</h3>
									<h4>
                      {" "}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.field_designation,
                        }}
                      />{" "}
                    </h4>
									<a href="javascript:void(0);">Read More <i class="fa fa-arrow-right"></i></a>
									<div className="clearfix"></div>
								</aside>
							</div>
							</aside> 
              </div>
            ))}
    </div>
  );
}

export default Leadership;
