import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
  },
  nav: {
    borderLeftColor: 'lightgray',
    borderLeftWidth: 1,
  },
  section: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  contents: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  constentsText: {},
  header: {
    flexDirection: 'row',
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  icon: {
    margin: 16,
    fontSize: 16,
  },
});

export default function Tab4Screen() {
  return (
    <View nativeID="wrap" style={styles.wrap}>
      <View nativeID="section" style={styles.section}>
        <View nativeID="contents" style={styles.contents}>
          <Text>Home</Text>
        </View>
        <View nativeID="header" style={styles.header}>
          <Text nativeID="home" style={styles.icon}>
            ⛪
          </Text>
          <Text style={styles.icon}>🤖</Text>
        </View>
      </View>
      <View nativeID="nav" style={styles.nav}>
        <Text style={styles.icon}>⛪</Text>
        <Text style={styles.icon}>🎡</Text>
        <Text style={styles.icon}>🎠</Text>
        <Text style={styles.icon}>🎮</Text>
        <Text style={styles.icon}>📷</Text>
        <Text style={styles.icon}>📼</Text>
      </View>
    </View>
  );
}
