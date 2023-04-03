import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskCardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#262626',
  },
  finishedTaskCardBox: {
    borderColor: '#262626',
  },
  taskDescription: {
    flex: 1,
    marginLeft: 8,
    color: '#F2F2F2',
  },
  finishedTaskDescription: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
});
