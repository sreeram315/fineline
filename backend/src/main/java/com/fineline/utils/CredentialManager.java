package com.fineline.utils;

import java.util.HashMap;
import java.util.Map;

public class CredentialManager {
    private static final Map<Object, Object> cache = new HashMap<>();

    private CredentialManager(){}

    public static String getAwsAccessKey() {
        cache.put("AWS_ACCESS_KEY", System.getenv("AWS_ACCESS_KEY"));
        return (String) cache.get("AWS_ACCESS_KEY");
    }

    public static String getAwsSecretkey() {
        cache.put("AWS_SECRET_KEY", System.getenv("AWS_SECRET_KEY"));
        return (String) cache.get("AWS_SECRET_KEY");
    }

    public static String getAwsMysqlPassword() {
        cache.put("AWS_MYSQL_PASSWORD", System.getenv("AWS_MYSQL_PASSWORD"));
        return (String) cache.get("AWS_MYSQL_PASSWORD");
    }

}
