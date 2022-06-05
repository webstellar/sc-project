import React, {Fragment} from "react";
import { GrSearch } from "react-icons/gr";

const SearchBar = () => {
  return (
    <Fragment>
      <form action="" className="mb-lg-5">
        <div className="input-group mb-4 border rounded-pill p-1">
          <div className="input-group-prepend border-0">
            <button
              id="button-addon4"
              type="button"
              className="btn btn-link text-info"
            >
              <GrSearch />
            </button>
          </div>
          <input
            type="search"
            placeholder="What're you searching for?"
            aria-describedby="button-addon4"
            className="form-control bg-none border-0"
          />
        </div>
      </form>
    </Fragment>
  );
};

export default SearchBar;
