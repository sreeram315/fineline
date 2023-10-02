package com.fineline.utils;


import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.sns.AmazonSNSClient;
import com.amazonaws.services.sns.AmazonSNSClientBuilder;
import com.amazonaws.services.sqs.AmazonSQSAsync;
import com.amazonaws.services.sqs.AmazonSQSAsyncClientBuilder;
import io.awspring.cloud.messaging.core.QueueMessagingTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class AmazonSqsConfiguration {

    private final String AWS_ACCESS_KEY = CredentialManager.getAwsAccessKey();
    private final String AWS_SECRET_KEY = CredentialManager.getAwsSecretkey();

    @Bean
    public QueueMessagingTemplate queueMessagingTemplate() {
        return new QueueMessagingTemplate(buildAmazonSQSAsync());
    }

    @Primary
    @Bean
    public AmazonSNSClient getAWSSNSClient() {
        return (AmazonSNSClient) AmazonSNSClientBuilder.standard()
                .withRegion(Regions.AP_SOUTH_1)
                .withCredentials(
                        new AWSStaticCredentialsProvider(new BasicAWSCredentials(AWS_ACCESS_KEY, AWS_SECRET_KEY)))
                .build();
    }

    private AmazonSQSAsync buildAmazonSQSAsync() {

        return AmazonSQSAsyncClientBuilder
                .standard()
                .withRegion(Regions.AP_SOUTH_1)
                .withCredentials(
                        new AWSStaticCredentialsProvider(
                                new BasicAWSCredentials(AWS_ACCESS_KEY, AWS_SECRET_KEY)
                        )
                )
                .build();

    }

}
