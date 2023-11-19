import { UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Divider, Dropdown, Layout, Row, Select, theme } from 'antd';
import { ClearAuthenticationStorage, GetLang, SetLang } from 'common/storage';
import { LANGUAGE_OPTION } from 'constant/constants';
import i18n from "i18n/i18n";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
const { Header } = Layout;

const LogoutRender = () => {
    const nagative = useNavigate();
    const actionLogout = () => {
        ClearAuthenticationStorage();
        nagative("/login");
    }
    return (
        <div onClick={actionLogout}>
            {i18n.t('button.logout')}
        </div>
    )
}

const ProfileRender = () => {
    return (
        <a target="_blank" rel="noopener noreferrer" href="/#">
            {i18n.t('button.profile')}
        </a>
    );
}

const SettingRender = () => {
    return (
        <a target="_blank" rel="noopener noreferrer" href="/#">
            {i18n.t('button.setting')}
        </a>
    );
}

const items = [
    {
        key: '0',
        label: (
            <div style={{ cursor: "default", pointerEvents: "none" }}>
                <Row>
                    <Col style={{ margin: 'auto' }}>
                        <Avatar className='avatar-header' size={'large'} icon={<UserOutlined />} />
                    </Col>
                    <Col>
                        <div style={{ padding: '8px' }}>
                            <div>Tran Nguyen Duc Anh</div>
                            <div>trannguyenducanh@vti.com.vn</div>
                        </div>
                    </Col>
                    <Divider style={{ margin: 0 }} />
                </Row>

            </div>
        ),
    },
    {
        key: '1',
        label: <ProfileRender />,
    },
    {
        key: '2',
        label: <SettingRender />,
    },
    {
        key: '3',
        label: <LogoutRender />,
    },
];

const CustomHeader = () => {
    const nagative = useNavigate();
    const { token: { colorBgContainer } } = theme.useToken();

    const [currentLang, setCurrentLang] = useState(null);

    useEffect(() => {
        const langStorage = GetLang();
        let lang = langStorage;
        if (langStorage === null) {
            lang = LANGUAGE_OPTION.ENGLISH;
            SetLang(lang);
        }
        setCurrentLang(lang);
    }, [])

    const handleChange = (v) => {
        SetLang(v);
        nagative(0);
    }
    return (
        <Header
            style={{
                padding: '0px 8px',
                background: colorBgContainer
            }}
        >
            <Row gutter={16}>
                <Col className="gutter-row" span={12}>

                </Col>
                <Col className="gutter-row defined-block" span={12}>
                    <Row>
                        <Select
                            value={currentLang}
                            style={{ width: 96, marginRight: "8px" }}
                            onChange={handleChange}
                            options={[
                                {
                                    value: LANGUAGE_OPTION.ENGLISH,
                                    label: 'English'
                                },
                                {
                                    value: LANGUAGE_OPTION.JAPAN,
                                    label: 'Japan'
                                },
                                {
                                    value: LANGUAGE_OPTION.VIETNAM,
                                    label: 'Vietnam'
                                },
                            ]}
                        />
                        <Dropdown
                            menu={{ items }}
                            trigger={['click']}
                            placement="bottomLeft"
                            arrow={{ pointAtCenter: true }}
                        >
                            <Avatar
                                className='avatar-header'
                                size={'default'}
                                icon={<UserOutlined />}
                            />
                        </Dropdown>
                    </Row>
                </Col>
            </Row>
        </Header>
    )
}

export default CustomHeader;