import { colors } from '@altitude-ui/tokens';

export function ColorsGrid() {
  return (
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(colors).map(([key, value]) => (
          <tr key={key}>
            <td style={{ backgroundColor: value }} />
            <td>
              $
              {key}
            </td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
