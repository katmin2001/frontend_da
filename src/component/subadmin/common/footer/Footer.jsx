import { Layout } from 'antd';
const { Footer } = Layout;

const CustomFooter = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2023 Created by Ant UED
        </Footer>
    );
};

export default CustomFooter;