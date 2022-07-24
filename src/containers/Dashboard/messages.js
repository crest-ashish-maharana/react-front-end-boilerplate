/*
 * Dashboard Messages
 *
 * This contains all the text for the Dashboard container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'containers.Dashboard';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Welcome User',
  },
});
