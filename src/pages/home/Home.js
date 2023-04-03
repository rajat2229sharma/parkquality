import React, { useEffect, useState } from "react";
import data from "../../data/data.json";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../redux/action/action";
import SearchIcon from "@mui/icons-material/Search";
import TableComponent from "../../components/table/Table";
import "../../App.scss";
import { useNavigate } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [filterUserName, setFilterUserName] = useState(false);
  const [filterUserPosition, setFilterUserPosition] = useState(false);
  const [filterUserOffice, setFilterUserOffice] = useState(false);
  const [openFilterDropdown, setOpenFilterDropdown] = useState(false);
  const navigate = useNavigate();

  const handleFilterUserName = (e) => {
    setFilterUserName(e.target.checked);
  };
  const handleFilterUserPosition = (e) => {
    setFilterUserPosition(e.target.checked);
  };
  const handleFilterUserOffice = (e) => {
    setFilterUserOffice(e.target.checked);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      if (!filterUserName && !filterUserPosition && !filterUserOffice) {
        setFilterData([]);
      }
      if (filterUserName && filterUserPosition && filterUserOffice) {
        let searchFilterData = userData.filter(
          (value) =>
            value.Name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            value.Office.toLowerCase().includes(e.target.value.toLowerCase()) ||
            value.Position.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterData(searchFilterData);
      }
      if (filterUserName && filterUserPosition && !filterUserOffice) {
        let searchFilterData = userData.filter(
          (value) =>
            value.Name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            value.Position.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterData(searchFilterData);
      }
      if (filterUserName && !filterUserPosition && filterUserOffice) {
        let searchFilterData = userData.filter(
          (value) =>
            value.Name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            value.Office.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterData(searchFilterData);
      }
      if (!filterUserName && filterUserPosition && filterUserOffice) {
        let searchFilterData = userData.filter(
          (value) =>
            value.Position.toLowerCase().includes(
              e.target.value.toLowerCase()
            ) ||
            value.Office.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterData(searchFilterData);
      }
      if (filterUserName && !filterUserPosition && !filterUserOffice) {
        let searchFilterData = userData.filter((value) =>
          value.Name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterData(searchFilterData);
      }
      if (!filterUserName && filterUserPosition && !filterUserOffice) {
        let searchFilterData = userData.filter((value) =>
          value.Position.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterData(searchFilterData);
      }
      if (!filterUserName && !filterUserPosition && filterUserOffice) {
        let searchFilterData = userData.filter((value) =>
          value.Office.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setFilterData(searchFilterData);
      }
    } else {
      setFilterData(userData);
    }
  };

  const handleNavigate = (page) => {
    navigate(`/${page}`);
  };

  const handleFilterDropdown = () => {
    setOpenFilterDropdown(!openFilterDropdown);
  };
  console.log(openFilterDropdown);

  useEffect(() => {
    setFilterData(userData);
  }, [userData]);

  useEffect(() => {
    dispatch(getUserData(data));
  }, []);
  return (
    <div className="root">
      <div className="container">
        <div className="input-wrapper">
          <input
            onChange={handleSearch}
            className="input"
            placeholder="Search"
            type="text"
            value={search}
          />
          <SearchIcon />
        </div>
        <div className="filter-wrapper">
          <div
            onClick={handleFilterDropdown}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <h3 className="filter-heading">Filter</h3>
            {openFilterDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </div>
          {openFilterDropdown && (
            <div>
              <div>
                <input
                  type="checkbox"
                  name="name"
                  onChange={handleFilterUserName}
                />
                <span>Name</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="position"
                  onChange={handleFilterUserPosition}
                />
                <span>Position</span>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="office"
                  onChange={handleFilterUserOffice}
                />
                <span>Office</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="table-wrapper">
        <TableComponent
          handleNavigate={handleNavigate}
          filterData={filterData}
        />
      </div>
    </div>
  );
};

export default Home;
