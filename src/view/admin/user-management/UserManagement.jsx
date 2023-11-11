import { Col, Row } from "antd";
import AdminUserService from 'api/admin/userService';
import CreateEditTab from "component/admin/common/CreateEditTab";
import UserCreate from "component/admin/user-management/UserCreate";
import UserEdit from "component/admin/user-management/UserEdit";
import SearchUserBlock from "component/admin/user-management/UserSearch";
import UserTable from "component/admin/user-management/UserTable";
import { HTTP_CODE } from "constant/constants";
import { useEffect, useState } from "react";

const UserManagement = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [userList, setUserList] = useState([]);
    const [userInfo, setUserInfo] = useState();
    const getListUser = () => {
        const request = {}
        AdminUserService.search(request).then((res) => {
            if (res.code === HTTP_CODE.SUCCESS) {
                const data = res.data;
                const dataMap = data.map((record, index) => ({ ...record, key: index }));
                setUserList(dataMap);
            }
        });
    }
    const changeEditMode = (value) => {
        AdminUserService.detail(value.username).then(res => {
            setUserInfo(res.data);
            setIsEditMode(true);
        });
    }
    useEffect(() => {
        getListUser();
    }, []);
    return (
        <div>
            <Row>
                <SearchUserBlock />
            </Row>
            <Row gutter={16}>
                <Col span={18}>
                    <UserTable changeEditMode={changeEditMode} userList={userList} />
                </Col>
                <Col span={6}>
                    <CreateEditTab
                        userInfo={userInfo}
                        isEditMode={isEditMode}
                        setIsEditMode={setIsEditMode}
                        createRender={<UserCreate refreshData={getListUser} />}
                        editRender={<UserEdit userInfo={userInfo} refreshData={getListUser} />}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default UserManagement;