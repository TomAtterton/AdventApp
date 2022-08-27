import React, { useState } from 'react';
import Dialog from 'react-native-dialog';

const DialogTextInput = ({
  isVisible,
  onHandleCancel,
  onHandleOk,
}: {
  isVisible: boolean;
  onHandleCancel: () => void;
  onHandleOk: (value: string) => void;
}) => {
  const [value, setValue] = useState('');

  const isDisabled = value.length === 0;

  return (
    <Dialog.Container visible={isVisible} onBackdropPress={onHandleCancel}>
      <Dialog.Title>Create New Calendar</Dialog.Title>
      <Dialog.Description>name it</Dialog.Description>
      <Dialog.Input value={value} onChangeText={setValue} />
      <Dialog.Button label="Cancel" onPress={onHandleCancel} />
      <Dialog.Button
        disabled={isDisabled}
        style={{ opacity: isDisabled ? 0.5 : 1 }}
        label="OK"
        onPress={() => onHandleOk(value)}
      />
    </Dialog.Container>
  );
};

export default DialogTextInput;
