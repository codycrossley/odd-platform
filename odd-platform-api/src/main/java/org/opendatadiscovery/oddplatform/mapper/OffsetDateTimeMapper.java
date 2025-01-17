package org.opendatadiscovery.oddplatform.mapper;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;
import org.mapstruct.Mapper;

@Mapper(config = MapperConfig.class)
public interface OffsetDateTimeMapper {
    default OffsetDateTime mapLocalDateTime(final LocalDateTime localDateTime) {
        if (localDateTime == null) {
            return null;
        }

        return localDateTime.atOffset(ZoneOffset.UTC);
    }

    default OffsetDateTime mapEpochSeconds(final Integer seconds) {
        if (seconds == null) {
            return null;
        }
        return OffsetDateTime.ofInstant(Instant.ofEpochSecond(seconds), ZoneOffset.UTC);
    }

    default LocalDateTime mapOffsetDateTime(final OffsetDateTime offsetDateTime) {
        if (offsetDateTime == null) {
            return null;
        }

        return offsetDateTime.atZoneSameInstant(ZoneOffset.UTC).toLocalDateTime();
    }
}