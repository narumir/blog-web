import styled from "@emotion/styled";
import Link from "next/link";
import type {
    FC,
} from "react";

const Header = styled.header`
    border-bottom: 1px solid #ccc;
    width: 100%;
    height: 58px;
`;

const HeaderContainer = styled.div`
    max-width: 896px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
`;

const Title = styled.a`
    font-size: 1.5rem;
    font-weight: 700;
`;

const SubTitle = styled.span`
    font-weight: 200;
`;

const Nav = styled.nav``;

const NavItem = styled.a`
    margin-left: 8px;
    margin-right: 8px;
`;

export const NavBar: FC = () => {
    return (
        <Header>
            <HeaderContainer>
                <Link href={"/"} passHref legacyBehavior>
                    <Title>
                        NARUMIR&nbsp;
                        <SubTitle>
                            LOG
                        </SubTitle>
                    </Title>
                </Link>
                <Nav>
                    <Link href={"/about"} passHref legacyBehavior>
                        <NavItem>About</NavItem>
                    </Link>
                    <Link href={"/dev"} passHref legacyBehavior>
                        <NavItem>Dev</NavItem>
                    </Link>
                    <Link href={"/art"} passHref legacyBehavior>
                        <NavItem>
                            Art
                        </NavItem>
                    </Link>
                </Nav>
            </HeaderContainer>
        </Header>
    );
};
