import { Button, Col, Form, Input, Row, Select, Tabs } from "antd";
import StoreCreate from "component/admin/store-management/StoreCreate";
import StoreEdit from "component/admin/store-management/StoreEdit";
import StoreTable from "component/admin/store-management/StoreTable";
import { ROLE_OPTION } from "constant/constants";
import { useState, useEffect } from "react";

const handleChange = (value) => {
    console.log(`selected ${value}`);
};

const SearchUserBlock = () => {
    const onSearch = () => {
        console.log("search")
    }
    return (
        <Form
            className="w100"
            name="Login form"
            onFinish={onSearch}
            autoComplete="off"
        >
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Username"
                        name="username"
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        label="Roles"
                        name="roles"
                    >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Please select"
                            onChange={handleChange}
                            options={ROLE_OPTION}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Form.Item className="w100 text-center">
                    <Button className="mr-8" type="primary" htmlType="submit">
                        Clear
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    );
}



const TabRightBlock = (props) => {
    const {
        isEditMode
    } = props;
    const [activeKey, setActiveKey] = useState(null);
    const onTabChange = () => {
        setActiveKey("create");
    }

    useEffect(() => {
        if (isEditMode) {
            setActiveKey("edit");
        } else {
            setActiveKey("create");
        }
    }, [isEditMode]);

    const tabItems = [
        {
            label: 'Create',
            key: 'create',
            children: <StoreCreate />,
        },
        {
            label: 'Edit',
            key: 'edit',
            children: <StoreEdit />,
            disabled: true,
        },
    ]
    return (
        <Tabs
            activeKey={activeKey}
            items={tabItems}
            onChange={onTabChange}
        />
    );
};


const StoreManagement = () => {
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <div>
            <Row>
                <SearchUserBlock />
            </Row>
            <Row gutter={16}>
                <Col span={18}>
                    <StoreTable setIsEditMode={setIsEditMode} />
                </Col>
                <Col span={6}>
                    <TabRightBlock isEditMode={isEditMode} />
                </Col>
            </Row>
        </div>
    );
}

export default StoreManagement;