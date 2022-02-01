import { Form, Modal, Rate } from 'antd';
import Button from 'components/UI/Button/Button';
import DFormItem from 'components/UI/DFormItem/DFormItem';
import DTextArea from 'components/UI/DTextArea/DTextArea';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import endpointUrls from 'utils/constants/endpointUrls';
import apiServices from 'utils/services/apiServices';

const SendComment = ({ show, close, id, getProduct }) => {
  //state
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  //effects
  useEffect(() => {
    form.resetFields();
  }, [show]);

  //functions
  const handleSubmit = async ({ Rating, ReviewText }) => {
    setLoading(true);
    const result = await apiServices.post(endpointUrls.sendComment, {
      ProductId: id,
      Rating,
      ReviewText,
    });
    setLoading(false);
    if (result.isSuccess) {
      form.resetFields();
      toast.success('نظر شما با موفقیت ثبت شد.');
      getProduct();
      close();
    }
  };

  return (
    <Modal
      visible={show}
      onCancel={close}
      title='ارسال نظر'
      destroyOnClose
      keyboard
      footer={false}
    >
      <Form form={form} onFinish={handleSubmit} requiredMark={false}>
        <DFormItem
          label='امتیاز'
          name='Rating'
          rules={[{ required: true, message: 'امتیاز شما به این محصول.' }]}
        >
          <Rate disabled={loading} />
        </DFormItem>
        <DFormItem label='نظر' name='ReviewText'>
          <DTextArea rows={4} disabled={loading} />
        </DFormItem>
        <div className='flex justify-end gap-x-4'>
          <Button
            key={2}
            text='بازگشت'
            onClick={close}
            back
            loading={loading}
          />
          <Button key={1} text='ارسال' type='submit' loading={loading} />
        </div>
      </Form>
    </Modal>
  );
};

export default SendComment;
