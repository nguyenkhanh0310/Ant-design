import { Button, Flex } from 'antd';
import { StepBackwardOutlined } from '@ant-design/icons';

function LearnButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      const result = {
        "code": 200,
        data: []
      };
      if (result && result.code === 200) {
        setLoading(false);
      }
    }, 3000);
  }

  return (
    <>
      <Button onClick={handleClick} href='https://khoahoc.28tech.com.vn' type="primary" loading={loading} disabled={loading} danger={loading}>Nội dung </Button>
      <Button icon={<StepBackwardOutlined rotate={180} spin={true}/>}>Button</Button>
    </>
  );
}

export default LearnButton;