import React from "react";

const ScrolltotopBtn = () => (
	// <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
	<div>
		<div className="scroll-to-top d-lg-none position-fixed">
			<a
				className="js-scroll-trigger d-block text-center text-white rounded"
				href="#page-top"
			>
				<i className="fa fa-chevron-up"></i>
			</a>
		</div>
	</div>
);

export default ScrolltotopBtn;
