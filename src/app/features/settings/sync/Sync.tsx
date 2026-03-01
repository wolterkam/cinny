import React from 'react';
import { Box, Icon, Icons, Switch, Text, config } from 'folds';
import { SequenceCard } from '../../../components/sequence-card';
import { useSetting } from '../../../state/hooks/settings';
import { settingsAtom } from '../../../state/settings';

export function Sync() {
  const [syncSettings, setSyncSettings] = useSetting(settingsAtom, 'syncSettings');

  return (
    <SequenceCard
      variant="SurfaceVariant"
      style={{
        borderRadius: config.radii.Pill,
        padding: config.space.S200,
        width: '100%',
      }}
    >
      <Box alignItems="Center" gap="300" style={{ width: '100%' }}>
        <Box shrink="No">
          <Icon src={Icons.Globe} size="100" />
        </Box>
        <Box grow="Yes">
          <Text size="T200" truncate>
            Sync
          </Text>
        </Box>
        <Box shrink="No">
          <Switch value={syncSettings} onChange={setSyncSettings} />
        </Box>
      </Box>
    </SequenceCard>
  );
}
