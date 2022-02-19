import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomButton,
  CustomLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import store from "../../store";
import { fetchCars } from "../../action";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const [value, setValue] = useState("")

  const buildUrl = (url:string, searchInput:string) => {
    var qp = "";
    if (searchInput) {
      qp += "search="+searchInput;
      url = url + "?" + qp;
      if (store.getState().filterParam && store.getState().filterParam.page_size) {
        url = url + "&pageSize=" + store.getState().filterParam.page_size;
      } else {
        url = url + "&pageSize=" + window.carsPerPage;
      }
      if (store.getState().filterParam && store.getState().filterParam.page_index) {
        url = url + "&pageIndex=" + store.getState().filterParam.page_index;
      } else {
        url = url + "&pageIndex=0";
      }
    } else {
      if (store.getState().filterParam && store.getState().filterParam.page_size) {
        url = url + "?pageSize=" + store.getState().filterParam.page_size + "&pageIndex=0";
      } else {
        url = url + "?pageSize=" + window.carsPerPage + "&pageIndex=0";
      }
    }
    // console.log(url);
    return url;
  }

  const requestSearch = (e: any) => {
    e.preventDefault();
    
    const input = value;
    const searchInput = input.replace(/\s+/g, '+').trim();
    // console.log(searchInput);
    const fetchUrl = buildUrl(window.baseUrl, searchInput);
    store.dispatch(fetchCars(fetchUrl));
  }

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomLinkSmall to="/">
          <CustomButton>
            <b>{t("Home")}</b>
          </CustomButton>
        </CustomLinkSmall>

        <CustomLinkSmall to="/search">
          <Span>{t("Search")}
          </Span>
        </CustomLinkSmall>

        <CustomLinkSmall to="/predict" >
          <Span>
            {t("Predict")}
          </Span>
        </CustomLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <Label>GearMax</Label>
            {/* <SvgIcon src="logo.svg" width="101px" height="64px" /> */}
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
      &nbsp;
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 1, boxShadow: 1} }
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search by Keywords"
          inputProps={{ 'aria-label': 'search by keywords' }}
          onChange={event => {                                 //adding the onChange event
            setValue(event.target.value);
          }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={requestSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
