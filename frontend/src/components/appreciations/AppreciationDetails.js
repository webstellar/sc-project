import React, { Fragment, useEffect } from "react";
import { Container } from "react-bootstrap";
import ErrorBoundary from "../../ErrorBoundary";
import Loader from "../layout/Loader";
import MetaData from "../../components/layout/MetaData";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppreciationDetails,
  clearErrors,
} from "../../actions/appreciationActions";

const AppreciationDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { loading, error, appreciation } = useSelector(
    (state) => state.appreciationDetails
  );

  useEffect(() => {
    dispatch(getAppreciationDetails(id));

    if (error) {
      //alert.error(error);
      dispatch(clearErrors);
    }
  }, [dispatch, error, id]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"appreciation"} />
          <Container>
            <ErrorBoundary>
                
            </ErrorBoundary>
          </Container>
        </Fragment>
      )}
    </Fragment>
  );
};

export default AppreciationDetails;
