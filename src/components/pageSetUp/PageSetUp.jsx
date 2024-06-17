//Parent component that sets up everything on the page

import Container from '@mui/material/Container';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Grid from '@mui/material/Grid';

import NavigationBar from "../navigationBar/NavigationBar";

const PageSetUp = () => {

	return (
		<Router>
			<NavigationBar />
			<Container maxWidth={false} sx={{marginBottom: "30px", marginTop: "85px"}}>
				<Grid container spacing={2} sx={{paddingTop: "24px"}}>
					{/* <Routes>
						<Route
							path="/"
							element={
								<Navigate to="/home" />
							}
						/>
						<Route
							path="/home"
							element={
								<ProtectedRoute>
									<Home/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/login"
							element={
								<Login/>
							}
						/>
						<Route
							path="/signup"
							element={
								<SignUp/>
							}
						/>
						<Route
							path="/product/add"
							element={
								<ProtectedRoute role={["ADMIN"]}>
									<ProductPage
										mode={"CREATE"}
										buttonText="SAVE PRODUCT"
										headingText="Add Product"
										callbackFunction={createProduct}
									/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/product/modify"
							element={
								<ProtectedRoute role={["ADMIN"]}>
									<ProductPage
										mode={"MODIFY"}
										buttonText="MODIFY PRODUCT"
										headingText="Modify Product"
										callbackFunction={modifyProduct}
									/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/product/view"
							element={
								<ProtectedRoute >
									<ProductDetails	/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="/product/order"
							element={
								<ProtectedRoute >
									<PlaceOrder	/>
								</ProtectedRoute>
							}
						/>
						<Route
							path="*"
							element={
								<ErrorPage />
							}
						/>
					</Routes> */}
				</Grid>
			</Container>
		</Router>
	);
};

export default PageSetUp;