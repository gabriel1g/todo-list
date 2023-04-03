import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerBox: {
    alignItems: 'center',
    height: 180,
    paddingTop: 60,
    paddingBottom: 32,
    backgroundColor: '#0D0D0D',
  },
  logo: {
    height: 35,
    width: 120,
  },
  contentBox: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#1A1A1A',
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 54,
    marginTop: -30,
  },
  tasksInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#0D0D0D',
    borderRadius: 6,
    marginRight: 5,
    backgroundColor: '#262626',
    color: '#F2F2F2',
    fontSize: 16,
  },
  addTasksButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 52,
    width: 52,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
  },
});
