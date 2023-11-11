import { Col, Row } from "antd";
import CreateEditTab from "component/admin/common/CreateEditTab";
import RoleCreate from "component/admin/role-management/RoleCreate";
import RoleSearch from "component/admin/role-management/RoleSearch";
import RoleTable from "component/admin/role-management/RoleTable";
import { useState } from "react";

const RoleManagement = () => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [roleInfo, setRoleInfo] = useState();

    const changeEditMode = (value) => {
        setRoleInfo(value);
        setIsEditMode(true);
    }
    
    return (
        <div>
            <Row>
                <RoleSearch />
            </Row>
            <Row gutter={16}>
                <Col span={18}>
                    <RoleTable changeEditMode={changeEditMode} />
                </Col>
                <Col span={6}>
                    <CreateEditTab
                        setIsEditMode={setIsEditMode}
                        isEditMode={isEditMode}
                        createRender={<RoleCreate isCreateMode={true} />}
                        editRender={<RoleCreate isCreateMode={false} formData={roleInfo} />}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default RoleManagement;